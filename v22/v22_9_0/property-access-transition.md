## Property access after shape transition


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

Adding property after object creation - small object | ██████████████████████████████ | 7,986,994 ops/sec
Adding property in the object creation - small object | ██████████████████████████████ | 7,941,045 ops/sec
Adding property after the function creation - small class | █----------------------------- | 272,654 ops/sec
Adding property in the function creation - small class | █----------------------------- | 281,593 ops/sec
Adding property after the class creation - small class | █----------------------------- | 267,608 ops/sec
Adding property in the class creation - small class | █----------------------------- | 265,851 ops/sec
```
