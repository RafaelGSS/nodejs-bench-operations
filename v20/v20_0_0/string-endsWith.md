## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,682,011|6341006|
|(short string) (true) String#slice and strict comparison|15,719,579|7859790|
|(long string) (true) String#endsWith|12,423,779|6211890|
|(long string) (true) String#slice and strict comparison|15,950,526|7975264|
|(short string) (false) String#endsWith|13,845,019|6922510|
|(short string) (false) String#slice and strict comparison|15,909,568|7954785|
|(long string) (false) String#endsWith|13,573,258|6786630|
|(long string) (false) String#slice and strict comparison|15,890,939|7945470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:33:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12682011.55590476,"samples":6341006},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15719579.437004192,"samples":7859790},{"name":"(long string) (true) String#endsWith","opsSec":12423779.251663363,"samples":6211890},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15950526.777069926,"samples":7975264},{"name":"(short string) (false) String#endsWith","opsSec":13845019.83201463,"samples":6922510},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15909568.513801618,"samples":7954785},{"name":"(long string) (false) String#endsWith","opsSec":13573258.820334194,"samples":6786630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15890939.89835641,"samples":7945470}]}-->
