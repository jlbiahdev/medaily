Object.defineProperty(String.prototype, "truncate", { 
    value: function truncate(len, overflowtext) { 
        if (this.length > len) { 
            return this.substring(0, len) + overflowtext; 
        } 
        return this; 
    }, 
    writable: true, 
    configurable: true, 
});