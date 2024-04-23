## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|274,342,760|93|
|(short string) (true) String#slice and strict comparison|816,375,618|95|
|(long string) (true) String#endsWith|173,708,455|93|
|(long string) (true) String#slice and strict comparison|816,841,428|95|
|(short string) (false) String#endsWith|779,674,165|97|
|(short string) (false) String#slice and strict comparison|817,215,856|97|
|(long string) (false) String#endsWith|777,032,254|95|
|(long string) (false) String#slice and strict comparison|814,643,252|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":274342760.364869,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":816375618.1937544,"samples":5},{"name":"(long string) (true) String#endsWith","opsSec":173708455.20368987,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":816841428.1214546,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":779674164.6691935,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817215856.0896342,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":777032253.5746518,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":814643252.2317692,"samples":7}]}-->
