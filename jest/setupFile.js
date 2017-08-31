
Object.defineProperty(location, "search", {
	writable: true,
	value: "?from=sFrom&open=true"
});

Object.defineProperty(location, "href", {
	writable: true,
	value: "about.blank"
});

Object.defineProperty(location, "userAgent", {
	writable: true,
	value: ""
});

Object.defineProperty(location, "replace", {
	writable: true,
	value: ""
});


Object.defineProperty(navigator, "userAgent", {
	writable: true,
	value: ""
});

const locationReplaceFn = jest.fn();
location.replace = locationReplaceFn;
