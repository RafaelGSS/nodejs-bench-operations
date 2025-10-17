## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,723,573|43361804|
|(short string) (true) String#slice and strict comparison|54,274,890|27137454|
|(long string) (true) String#startsWith|66,539,467|33269742|
|(long string) (true) String#slice and strict comparison|50,510,519|25255274|
|(short string) (false) String#startsWith|92,255,718|46128631|
|(short string) (false) String#slice and strict comparison|54,965,376|27490404|
|(long string) (false) String#startsWith|88,014,539|44007275|
|(long string) (false) String#slice and strict comparison|50,358,802|25182455|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:24:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43361804,"opsSec":86723573.83091192},{"name":"(short string) (true) String#slice and strict comparison","samples":27137454,"opsSec":54274890.95768424},{"name":"(long string) (true) String#startsWith","samples":33269742,"opsSec":66539467.232054256},{"name":"(long string) (true) String#slice and strict comparison","samples":25255274,"opsSec":50510519.10798307},{"name":"(short string) (false) String#startsWith","samples":46128631,"opsSec":92255718.19281177},{"name":"(short string) (false) String#slice and strict comparison","samples":27490404,"opsSec":54965376.80025558},{"name":"(long string) (false) String#startsWith","samples":44007275,"opsSec":88014539.08619715},{"name":"(long string) (false) String#slice and strict comparison","samples":25182455,"opsSec":50358802.98796165}]}-->
