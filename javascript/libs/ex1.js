let n;
        while (true) {
            n = prompt('Enter a positive integer');
            n = parseFloat(n); 
            if (!isNaN(n) && n > 1 && n === Math.floor(n)) {
                break;
            }     
        }

        function showPrime(n) {
            let primes = [];
            for (let i = 2; i <= n; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }

            if (primes.length > 0) {
                alert('For n = ' + n + ', prime numbers are: ' + primes.join(', '));
            }
        }

        function isPrime(num) {
            if (num < 2) return false; 
            for (let i = 2; i <= Math.sqrt(num); i++) { 
                if (num % i === 0) return false;
            }
            return true;
        }

        showPrime(n);