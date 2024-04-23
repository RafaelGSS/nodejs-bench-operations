## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|79,595,764|95|
|(short string) (true) String#slice and String#indexOf|817,584,075|92|
|(short string) (true) String#slice and strict comparison|817,316,485|96|
|(long string) (true) String#startsWith|70,746,197|97|
|(long string) (true) String#slice and strict comparison|814,355,446|92|
|(short string) (false) String#startsWith|94,055,850|98|
|(short string) (false) String#slice and strict comparison|817,572,814|99|
|(long string) (false) String#startsWith|81,787,456|96|
|(long string) (false) String#slice and strict comparison|814,755,069|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":79595764.07051654,"samples":5},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":817584074.5199797,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":817316485.2363856,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":70746196.79653198,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":814355446.4025432,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":94055850.03049788,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":817572813.5899613,"samples":9},{"name":"(long string) (false) String#startsWith","opsSec":81787456.0270189,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":814755068.6533026,"samples":9}]}-->
