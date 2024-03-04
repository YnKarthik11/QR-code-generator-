angular.module('qrGeneratorApp', [])

.controller('QRGeneratorController', function($scope) {
    $scope.qrData = ''; // Initialize data

    $scope.generateQRCode = function() {
        var qrCodeDiv = document.getElementById('qrcode');

        // Clear existing QR Code if any
        while (qrCodeDiv.firstChild) {
            qrCodeDiv.removeChild(qrCodeDiv.firstChild);
        }

        // Generate QR Code
        var qr = new QRCode(qrCodeDiv, {
            text: $scope.qrData,
            width: 200,
            height: 200
        });
    };
});
