## startsWith comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

(short string) (true) String#startsWith       | █████████████████████████████- | 91,398,811 ops/sec
(short string) (true) String#slice and strict comparison | ████████████████-------------- | 52,373,143 ops/sec
(long string) (true) String#startsWith        | █████████████████------------- | 54,509,776 ops/sec
(long string) (true) String#slice and strict comparison | ███████████████--------------- | 47,556,283 ops/sec
(short string) (false) String#startsWith      | ██████████████████████████████ | 96,145,818 ops/sec
(short string) (false) String#slice and strict comparison | ████████████████-------------- | 52,576,692 ops/sec
(long string) (false) String#startsWith       | ███████████████████████████--- | 86,133,104 ops/sec
(long string) (false) String#slice and strict comparison | ███████████████--------------- | 46,525,697 ops/sec
```
