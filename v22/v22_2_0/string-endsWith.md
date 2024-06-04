## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,596,220|7798111|
|(short string) (true) String#slice and strict comparison|15,932,357|7966179|
|(long string) (true) String#endsWith|14,209,889|7104945|
|(long string) (true) String#slice and strict comparison|16,052,976|8026538|
|(short string) (false) String#endsWith|15,977,959|7988980|
|(short string) (false) String#slice and strict comparison|16,106,407|8053204|
|(long string) (false) String#endsWith|15,515,646|7757824|
|(long string) (false) String#slice and strict comparison|16,034,363|8017182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15596220.596372595,"samples":7798111},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15932357.522078551,"samples":7966179},{"name":"(long string) (true) String#endsWith","opsSec":14209889.147407345,"samples":7104945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16052976.182595989,"samples":8026538},{"name":"(short string) (false) String#endsWith","opsSec":15977959.520614669,"samples":7988980},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16106407.259339394,"samples":8053204},{"name":"(long string) (false) String#endsWith","opsSec":15515646.262191037,"samples":7757824},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16034363.903640954,"samples":8017182}]}-->
