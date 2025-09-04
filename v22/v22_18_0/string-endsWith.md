## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,882,955|45986772|
|(short string) (true) String#slice and strict comparison|59,725,555|29862809|
|(long string) (true) String#endsWith|65,810,253|32916370|
|(long string) (true) String#slice and strict comparison|54,342,158|27180476|
|(short string) (false) String#endsWith|95,455,416|47744403|
|(short string) (false) String#slice and strict comparison|59,697,939|29862833|
|(long string) (false) String#endsWith|87,635,468|43817742|
|(long string) (false) String#slice and strict comparison|53,655,666|26849628|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45986772,"opsSec":91882955.49158539},{"name":"(short string) (true) String#slice and strict comparison","samples":29862809,"opsSec":59725555.52706892},{"name":"(long string) (true) String#endsWith","samples":32916370,"opsSec":65810253.03140069},{"name":"(long string) (true) String#slice and strict comparison","samples":27180476,"opsSec":54342158.52526426},{"name":"(short string) (false) String#endsWith","samples":47744403,"opsSec":95455416.45896599},{"name":"(short string) (false) String#slice and strict comparison","samples":29862833,"opsSec":59697939.41143624},{"name":"(long string) (false) String#endsWith","samples":43817742,"opsSec":87635468.40088663},{"name":"(long string) (false) String#slice and strict comparison","samples":26849628,"opsSec":53655666.887400016}]}-->
