## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|215,867,928|97|
|(short string) (true) String#slice and String#indexOf|820,110,417|97|
|(short string) (true) String#slice and strict comparison|818,510,307|96|
|(long string) (true) String#startsWith|133,189,088|97|
|(long string) (true) String#slice and strict comparison|815,273,408|94|
|(short string) (false) String#startsWith|436,640,542|97|
|(short string) (false) String#slice and strict comparison|820,152,893|95|
|(long string) (false) String#startsWith|329,719,629|93|
|(long string) (false) String#slice and strict comparison|816,010,782|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":215867927.9194277,"samples":7},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":820110417.0326377,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":818510307.1932783,"samples":11},{"name":"(long string) (true) String#startsWith","opsSec":133189087.96314931,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":815273408.3159597,"samples":9},{"name":"(short string) (false) String#startsWith","opsSec":436640542.23471797,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820152892.592063,"samples":10},{"name":"(long string) (false) String#startsWith","opsSec":329719629.15430915,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":816010782.1524727,"samples":8}]}-->
