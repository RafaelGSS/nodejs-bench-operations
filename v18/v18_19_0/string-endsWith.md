## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,769,362|99|
|(short string) (true) String#slice and strict comparison|818,463,726|97|
|(long string) (true) String#endsWith|76,302,148|97|
|(long string) (true) String#slice and strict comparison|806,027,052|94|
|(short string) (false) String#endsWith|97,155,481|90|
|(short string) (false) String#slice and strict comparison|817,539,172|99|
|(long string) (false) String#endsWith|89,286,568|96|
|(long string) (false) String#slice and strict comparison|808,682,793|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81769361.63335127,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":818463725.5381513,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":76302147.635442,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":806027052.455286,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":97155481.47607084,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817539172.1798494,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":89286567.94847918,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":808682793.2814785,"samples":8}]}-->
