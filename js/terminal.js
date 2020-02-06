var env = '{}';

var term = new Terminal({
	cursorStyle: "block",
	cursorBlink: true
});

var curr_line = '';
var entries = [];
var currPos = 0;
var pos = 0;

var opened = 0;
var prefix = "scm> ";
var final_input = "";

term.open(document.getElementById('terminal'));
term.prompt = () => {
	term.write('\r' + curr_line + '\n\u001b[32mscm> \u001b[37m');
};
term.write('Welcome to my Scheme web intepreter!\n');
term.prompt();

term.onData(function (ev) {
	const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey &&
		!(ev === "[D" && term.buffer.cursorX < 6) && !(ev === "[1;2A" || ev === "[1;2B" || ev === "[1;2C" || ev === "[1;2D");

	if (ev === "\r") { // Enter key
		final_input += " " + curr_line;

		if (opened > 0) {
			prefix = "...> "
			term.write('\n\33[2K\r\u001b[32m' + prefix + '\u001b[37m');

			/*else if (final_input.replace(/\s+/g, '') === '(life)') {
				term.write('\n\r|__  o\\\n\r| W    \\O \n\r|       |\\_\n\r|      /-\\ \n\r|    /     \\\n\r|');
				prefix = "scm> ";
				curr_line = '';
				term.prompt();*/
		} else if (final_input.replace(/^\s+|\s+$/g, '').length != 0) { // Check if string is all whitespace
			currPos = entries.length;
			final_input = encodeURIComponent(final_input);
			fetch('https://momo-infinity.herokuapp.com/getval/?expr=' + final_input.toString() + '&env=' + encodeURIComponent(env))
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					data.outputs.forEach(element => {
						term.write("\n\r" + element);
					});
					if (data.expr != '') {
						if (data.expr != null && data.expr && data.expr.substring(0, 5) === 'Error') {
							term.write('\n\r\u001b[31m' + data.expr);
						} else {
							term.write('\n\r' + data.expr);
						}
					}
					prefix = "scm> "
					env = data.env;
					final_input = "";
					term.prompt();
				});

		} else {
			term.write('\n\33[2K\r\u001b[32mscm> \u001b[37m');
		}
		curr_line = '';
	} else if (ev === "\x7F") { // Backspace
		if (term.buffer.cursorX > 5) {
			if (curr_line[curr_line.length - 1] === '(') {
				opened -= 1;
			}
			curr_line = curr_line.slice(0, term.buffer.cursorX - 6) + curr_line.slice(term.buffer.cursorX - 5);
			pos = curr_line.length - term.buffer.cursorX + 6;
			term.write('\33[2K\r\u001b[32m' + prefix + '\u001b[37m' + curr_line);
			term.write('\033['.concat(pos.toString()).concat('D')); //term.write('\033[<N>D');
			if (term.buffer.cursorX == 5 || term.buffer.cursorX == curr_line.length + 6) {
				term.write('\033[1C');
			}
		}
	} else if (ev === "[A") { // Up Arrow
		console.log(entries.length);
		if (entries.length > 0) {
			if (currPos > 0) {
				currPos -= 1;
			}
			curr_line = entries[currPos];
			term.write('\33[2K\r\u001b[32m' + prefix + '\u001b[37m' + curr_line);
			console.log(opened);
		}
	} else if (ev === "[B") { // Down Arrow
		currPos += 1;
		if (currPos === entries.length || entries.length === 0) {
			currPos -= 1;
			curr_line = '';
			term.write('\33[2K\r\u001b[32m' + prefix + '\u001b[37m');
		} else {
			curr_line = entries[currPos];
			term.write('\33[2K\r\u001b[32m' + prefix + '\u001b[37m' + curr_line);

		}
	} else if (printable && !(ev === "[C" && term.buffer.cursorX > curr_line.length + 4)) {
		if (ev != "[D" && ev != "[C") {
			var input = ev;
			if (ev == "\t") {
				input = "    ";
			}
			if (ev == "(") {
				opened += 1;
			}
			if (ev == ")" && opened > 0) {
				opened -= 1;
			}
			if (term.buffer.cursorX === curr_line.length + 5) { // End of line
				pos = curr_line.length - term.buffer.cursorX + 4;
			} else {
				pos = curr_line.length - term.buffer.cursorX + 5;
			}
			curr_line = [curr_line.slice(0, term.buffer.cursorX - 5), input, curr_line.slice(term.buffer.cursorX - 5)].join('');
			var cursor = '\033['.concat(pos.toString()).concat('D');
			term.write('\r\u001b[32m' + prefix + '\u001b[37m' + curr_line + cursor);
		} else {
			term.write(ev);
		}
	}

});
