## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|309,247,162|94|
|(short string) (true) String#slice and strict comparison|909,396,782|96|
|(long string) (true) String#endsWith|194,989,435|96|
|(long string) (true) String#slice and strict comparison|908,184,495|95|
|(short string) (false) String#endsWith|870,542,028|100|
|(short string) (false) String#slice and strict comparison|909,313,810|99|
|(long string) (false) String#endsWith|868,328,282|94|
|(long string) (false) String#slice and strict comparison|909,962,029|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":309247162.27773964,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":909396782.0209001,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":194989434.90862694,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":908184495.3033423,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":870542027.85542,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":909313810.4226412,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":868328281.671055,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909962029.0694051,"samples":6}]}-->
