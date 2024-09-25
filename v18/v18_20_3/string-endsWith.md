## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,625,226|5812614|
|(short string) (true) String#slice and strict comparison|11,663,983|5831992|
|(long string) (true) String#endsWith|11,346,505|5673253|
|(long string) (true) String#slice and strict comparison|11,193,376|5596689|
|(short string) (false) String#endsWith|11,814,962|5907482|
|(short string) (false) String#slice and strict comparison|12,125,120|6062561|
|(long string) (false) String#endsWith|11,492,343|5746172|
|(long string) (false) String#slice and strict comparison|11,566,593|5783299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:37:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11625226.05731926,"samples":5812614},{"name":"(short string) (true) String#slice and strict comparison","opsSec":11663983.314244892,"samples":5831992},{"name":"(long string) (true) String#endsWith","opsSec":11346505.525403365,"samples":5673253},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11193376.79366014,"samples":5596689},{"name":"(short string) (false) String#endsWith","opsSec":11814962.3985006,"samples":5907482},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12125120.369287344,"samples":6062561},{"name":"(long string) (false) String#endsWith","opsSec":11492343.159423016,"samples":5746172},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11566593.970065638,"samples":5783299}]}-->
