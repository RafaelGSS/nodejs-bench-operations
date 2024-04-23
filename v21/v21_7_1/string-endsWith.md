## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|273,305,093|96|
|(short string) (true) String#slice and strict comparison|816,182,201|98|
|(long string) (true) String#endsWith|171,217,888|94|
|(long string) (true) String#slice and strict comparison|816,902,988|96|
|(short string) (false) String#endsWith|775,066,582|99|
|(short string) (false) String#slice and strict comparison|816,922,970|97|
|(long string) (false) String#endsWith|776,210,775|96|
|(long string) (false) String#slice and strict comparison|818,416,290|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":273305093.0190106,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":816182200.7718906,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":171217888.1415289,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":816902988.139297,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":775066581.6339992,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":816922970.467213,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":776210774.9015442,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":818416289.6505735,"samples":6}]}-->
