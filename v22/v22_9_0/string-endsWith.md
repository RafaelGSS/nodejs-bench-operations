## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|125,291,610|62645823|
|(short string) (true) String#slice and strict comparison|51,208,228|25604119|
|(long string) (true) String#endsWith|54,881,749|27447825|
|(long string) (true) String#slice and strict comparison|46,161,405|23084749|
|(short string) (false) String#endsWith|96,028,250|48015824|
|(short string) (false) String#slice and strict comparison|51,107,357|25553685|
|(long string) (false) String#endsWith|87,783,022|43892529|
|(long string) (false) String#slice and strict comparison|45,466,049|22733029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":125291610.6677658,"samples":62645823},{"name":"(short string) (true) String#slice and strict comparison","opsSec":51208228.78251882,"samples":25604119},{"name":"(long string) (true) String#endsWith","opsSec":54881749.66020957,"samples":27447825},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46161405.25939835,"samples":23084749},{"name":"(short string) (false) String#endsWith","opsSec":96028250.13639717,"samples":48015824},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51107357.73423414,"samples":25553685},{"name":"(long string) (false) String#endsWith","opsSec":87783022.83839852,"samples":43892529},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45466049.452382706,"samples":22733029}]}-->
