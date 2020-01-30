var env = '{}';

var term = new Terminal({
	cursorBlink: "block"
});

var curr_line = '';
var entries = [];
var currPos = 0;
var pos = 0;

term.open(document.getElementById('terminal'));
term.prompt = () => {
	term.write('\r' + curr_line + '\n\u001b[32mscm> \u001b[37m');
};
term.write('Welcome to my Scheme web intepreter!\n');
term.prompt();

term.onData(function (ev) {
	const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey &&
		!(ev === "[D" && term.buffer.cursorX < 6);

	if (ev === "\r") { // Enter key
		if (curr_line.replace(/^\s+|\s+$/g, '').length != 0) { // Check if string is all whitespace
			entries.push(curr_line);
			currPos = entries.length - 1;
			curr_line = encodeURIComponent(curr_line);
			console.log(curr_line);
			console.log(env);
			fetch('http://127.0.0.1:5000/getval/?expr=' + curr_line.toString() + '&env=' + encodeURIComponent(env))
				.then((res) => {
					return res.json()
				})
				.then((data) => {
					if (data.expr != null && data.expr.substring(0, 5) === 'Error') {
						term.write('\n\r\u001b[31m' + data.expr);
					} else {
						term.write('\n\r' + data.expr);
					}
					env = data.env;
					term.prompt();
				});

		} else {
			//term.write('\n\33[2K\r\u001b[32mscm> \u001b[37m');
		}
		curr_line = '';
	} else if (ev === "\x7F") { // Backspace
		if (term.buffer.cursorX > 5) {
			curr_line = curr_line.slice(0, term.buffer.cursorX - 6) + curr_line.slice(term.buffer.cursorX - 5);
			pos = curr_line.length - term.buffer.cursorX + 6;
			//term.write('\33[2K\r\u001b[32mscm> \u001b[37m' + curr_line);
			//term.write('\033['.concat(pos.toString()).concat('D')); //term.write('\033[<N>D');
			if (term.buffer.cursorX == 5 || term.buffer.cursorX == curr_line.length + 6) {
				//term.write('\033[1C');
			}
		}
	} else if (ev === "[A") { // Up Arrow
		if (entries.length > 0) {
			if (currPos > 0) {
				currPos -= 1;
			}
			curr_line = entries[currPos];
			//term.write('\33[2K\r\u001b[32mscm> \u001b[37m' + curr_line);
		}
	} else if (ev === "[B") { // Down Arrow
		currPos += 1;
		if (currPos === entries.length || entries.length === 0) {
			currPos -= 1;
			curr_line = '';
			//term.write('\33[2K\r\u001b[32mscm> \u001b[37m');
		} else {
			curr_line = entries[currPos];
			//term.write('\33[2K\r\u001b[32mscm> \u001b[37m' + curr_line);

		}
	} else if (printable && !(ev === "[C" && term.buffer.cursorX > curr_line.length + 4)) {
		if (ev != "[D" && ev != "[C") {
			var input = ev;
			if (ev == "\t") {
				input = "    ";
			}
			if (term.buffer.cursorX === curr_line.length + 5) { // End of line
				pos = curr_line.length - term.buffer.cursorX + 4;
			} else {
				pos = curr_line.length - term.buffer.cursorX + 5;
			}
			curr_line = [curr_line.slice(0, term.buffer.cursorX - 5), input, curr_line.slice(term.buffer.cursorX - 5)].join('');
			//var cursor = '\033['.concat(pos.toString()).concat('D');
			//term.write('\33[2K\r\u001b[32mscm> \u001b[37m' + curr_line);
			term.write('\r\u001b[32mscm> \u001b[37m' + curr_line);
			//term.write("HI");
		} else {
			term.write(ev);
		}
	}

});
