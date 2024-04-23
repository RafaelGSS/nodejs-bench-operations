## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|80,895,624|96|
|(short string) (true) String#slice and strict comparison|817,124,363|95|
|(long string) (true) String#endsWith|75,842,244|92|
|(long string) (true) String#slice and strict comparison|808,447,215|97|
|(short string) (false) String#endsWith|96,913,730|99|
|(short string) (false) String#slice and strict comparison|818,129,700|95|
|(long string) (false) String#endsWith|89,502,370|98|
|(long string) (false) String#slice and strict comparison|809,605,370|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":80895624.12970485,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":817124363.1123765,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":75842243.59876835,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":808447215.3896035,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":96913729.63098466,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":818129699.5591421,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":89502369.59051351,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":809605369.6949626,"samples":7}]}-->
