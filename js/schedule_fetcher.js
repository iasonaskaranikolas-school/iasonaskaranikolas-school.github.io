let isBrowser;

try {
	isBrowser = DOMParser !== null && DOMParser !== undefined;
} catch {
	isBrowser = false;
}

let url = "http://2epal-chalandr.att.sch.gr/index_htm_files/2022%20Programma%20ana%20Tmima%2011%2007.html";

if (isBrowser === true) {
	url = `https://cors-everywhere.tk/get?q=${url}`;
}

console.log(isBrowser);
console.log(url);

const grabSchedule = async (elem) => {
	const req = await fetch("http://2epal-chalandr.att.sch.gr/index_htm_files/2022%20Programma%20ana%20Tmima%2011%2007.html");
	if (req !== null && req !== undefined) {
		if (req.ok === true) {
			try {
				const res = await req.text();
				if (res !== null && res !== undefined) {
					const doc = isBrowser === true ? new DOMParser().parseFromString(res, "text/html") : HTMLParser.parse(res);
					if (doc !== null && doc !== undefined) {
						const thread = doc.getElementById(elem !== null && elem !== undefined ? elem : "table_2").childNodes[5]; // table_2 = A1
						if (thread !== null && thread !== undefined) {
							let daynum = 0;
							let days = {
								"1": {
									"title": "Δε",
									"lessons": []
								},
								"2": {
									"title": "Τρ",
									"lessons": []
								},
								"3": {
									"title": "Τε",
									"lessons": []
								},
								"4": {
									"title": "Πε",
									"lessons": []
								},
								"5": {
									"title": "Πα",
									"lessons": []
								}
							};
							for (let i = 1; i < thread.childNodes.length; i++) {
								const step1 = thread.childNodes[i];
								if (step1 !== null && step1 !== undefined) {
									if (step1.nodeType === 1) {
										daynum++;
										for (let i2 = 3; i2 < step1.childNodes.length; i2++) {
											try {
												const step2 = step1.childNodes[i2];
												if (step2 !== null && step2 !== undefined) {
													if (step2.nodeType === 1) {
														for (let i3 = 0; i3 < step2.childNodes.length; i3 = i3 + 2) {
															try {
																const lesson = step2.childNodes[i3];
																if (lesson !== null && lesson !== undefined) {
																	if (lesson.nodeType === 1) {
																		const lesson_text = isBrowser === true ? lesson.textContent : lesson.rawText;
																		if (lesson_text.charAt(0).match(/^\p{Lu}/u).length > 0 && !lesson_text.includes("+")) {
																			days[daynum].lessons.push(lesson_text);
																		}
																	}
																}
															} catch { }
														}
													}
												}
											} catch { }
										}
									}
								}
							}
							return days;
						}
					}
				}
			} catch { }
		}
	}
};