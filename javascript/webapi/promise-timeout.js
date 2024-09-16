function delayedGreeting(name) {
    return new Promise((resolve) => {
      const delay = Math.random() * (5000 - 1000) + 1000; 
      setTimeout(() => {
        resolve(`After delaying for ${(delay / 1000).toFixed(3)} seconds, Hello, ${name}!`);
      }, delay);
    });
  }
  
  delayedGreeting('Klang').then((message) => console.log(message));
  