## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|273,003,527|94|
|(short string) (true) String#slice and strict comparison|818,226,694|99|
|(long string) (true) String#endsWith|173,721,224|96|
|(long string) (true) String#slice and strict comparison|817,962,322|100|
|(short string) (false) String#endsWith|781,364,041|96|
|(short string) (false) String#slice and strict comparison|816,662,077|96|
|(long string) (false) String#endsWith|780,279,254|95|
|(long string) (false) String#slice and strict comparison|817,922,615|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":273003527.4420878,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":818226693.7974924,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":173721223.9278235,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":817962321.917755,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":781364041.369194,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":816662077.3796849,"samples":9},{"name":"(long string) (false) String#endsWith","opsSec":780279254.0355883,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":817922614.8238027,"samples":7}]}-->
