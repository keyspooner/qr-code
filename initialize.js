function onScanSuccess(qrMessage) {
	// handle the scanned code as you like
    console.log(`QR matched = ${qrMessage}`);
    alert(`QR matched = ${qrMessage}`)
}

function onScanFailure(error) {
	// handle scan failure, usually better to ignore and keep scanning
	//console.warn(`QR error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 }, true);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);