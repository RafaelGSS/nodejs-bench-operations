## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,813,247|7406624|
|(short string) (true) String#slice and strict comparison|12,717,336|6358669|
|(long string) (true) String#startsWith|14,187,912|7093957|
|(long string) (true) String#slice and strict comparison|12,599,454|6299728|
|(short string) (false) String#startsWith|13,931,437|6965719|
|(short string) (false) String#slice and strict comparison|12,981,415|6490708|
|(long string) (false) String#startsWith|15,434,653|7717327|
|(long string) (false) String#slice and strict comparison|12,360,300|6180151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:28:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14813247.792625455,"samples":7406624},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12717336.44847101,"samples":6358669},{"name":"(long string) (true) String#startsWith","opsSec":14187912.354419427,"samples":7093957},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12599454.36194827,"samples":6299728},{"name":"(short string) (false) String#startsWith","opsSec":13931437.192101046,"samples":6965719},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12981415.818462057,"samples":6490708},{"name":"(long string) (false) String#startsWith","opsSec":15434653.259021843,"samples":7717327},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12360300.220033428,"samples":6180151}]}-->
