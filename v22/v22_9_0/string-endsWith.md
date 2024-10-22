## endsWith comparison


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

(short string) (true) String#endsWith         | ████████████████████████████-- | 89,772,699 ops/sec
(short string) (true) String#slice and strict comparison | ███████████████████----------- | 60,692,869 ops/sec
(long string) (true) String#endsWith          | ███████████████████----------- | 61,205,657 ops/sec
(long string) (true) String#slice and strict comparison | █████████████████------------- | 54,169,775 ops/sec
(short string) (false) String#endsWith        | ██████████████████████████████ | 95,466,246 ops/sec
(short string) (false) String#slice and strict comparison | ███████████████████----------- | 59,935,505 ops/sec
(long string) (false) String#endsWith         | ████████████████████████████-- | 87,861,523 ops/sec
(long string) (false) String#slice and strict comparison | █████████████████------------- | 54,047,770 ops/sec
```
