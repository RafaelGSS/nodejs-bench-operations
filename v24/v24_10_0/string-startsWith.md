## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,661,470|43830744|
|(short string) (true) String#slice and strict comparison|56,930,531|28468460|
|(long string) (true) String#startsWith|66,647,420|33338996|
|(long string) (true) String#slice and strict comparison|51,889,862|25944939|
|(short string) (false) String#startsWith|92,136,680|46068439|
|(short string) (false) String#slice and strict comparison|58,172,759|29087783|
|(long string) (false) String#startsWith|87,836,852|43918437|
|(long string) (false) String#slice and strict comparison|52,914,666|26457334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:05:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43830744,"opsSec":87661470.292383},{"name":"(short string) (true) String#slice and strict comparison","samples":28468460,"opsSec":56930531.36963077},{"name":"(long string) (true) String#startsWith","samples":33338996,"opsSec":66647420.028663814},{"name":"(long string) (true) String#slice and strict comparison","samples":25944939,"opsSec":51889862.84816005},{"name":"(short string) (false) String#startsWith","samples":46068439,"opsSec":92136680.82750303},{"name":"(short string) (false) String#slice and strict comparison","samples":29087783,"opsSec":58172759.746069856},{"name":"(long string) (false) String#startsWith","samples":43918437,"opsSec":87836852.74348164},{"name":"(long string) (false) String#slice and strict comparison","samples":26457334,"opsSec":52914666.94170666}]}-->
