## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,081,073|44540545|
|(short string) (true) String#slice and strict comparison|63,521,426|31760759|
|(long string) (true) String#startsWith|64,560,916|32280471|
|(long string) (true) String#slice and strict comparison|58,981,297|29498591|
|(short string) (false) String#startsWith|97,456,346|48729676|
|(short string) (false) String#slice and strict comparison|63,277,153|31638586|
|(long string) (false) String#startsWith|88,988,464|44497203|
|(long string) (false) String#slice and strict comparison|57,892,281|28946486|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:23:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44540545,"opsSec":89081073.07459612},{"name":"(short string) (true) String#slice and strict comparison","samples":31760759,"opsSec":63521426.27506046},{"name":"(long string) (true) String#startsWith","samples":32280471,"opsSec":64560916.562998876},{"name":"(long string) (true) String#slice and strict comparison","samples":29498591,"opsSec":58981297.628773004},{"name":"(short string) (false) String#startsWith","samples":48729676,"opsSec":97456346.83608896},{"name":"(short string) (false) String#slice and strict comparison","samples":31638586,"opsSec":63277153.64962544},{"name":"(long string) (false) String#startsWith","samples":44497203,"opsSec":88988464.06227763},{"name":"(long string) (false) String#slice and strict comparison","samples":28946486,"opsSec":57892281.808216274}]}-->
