## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,777,840|7388921|
|(short string) (true) String#slice and strict comparison|13,424,617|6712309|
|(long string) (true) String#startsWith|13,801,056|6900529|
|(long string) (true) String#slice and strict comparison|12,674,946|6337474|
|(short string) (false) String#startsWith|14,252,659|7126330|
|(short string) (false) String#slice and strict comparison|12,960,772|6480387|
|(long string) (false) String#startsWith|13,626,073|6813037|
|(long string) (false) String#slice and strict comparison|12,712,389|6356195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:14:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14777840.788228903,"samples":7388921},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13424617.758412084,"samples":6712309},{"name":"(long string) (true) String#startsWith","opsSec":13801056.895880733,"samples":6900529},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12674946.149559973,"samples":6337474},{"name":"(short string) (false) String#startsWith","opsSec":14252659.886055423,"samples":7126330},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12960772.781422146,"samples":6480387},{"name":"(long string) (false) String#startsWith","opsSec":13626073.427414631,"samples":6813037},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12712389.618584894,"samples":6356195}]}-->
