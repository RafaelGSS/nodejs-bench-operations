## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|78,566,910|94|
|(short string) (true) String#slice and strict comparison|819,777,792|94|
|(long string) (true) String#startsWith|70,511,931|96|
|(long string) (true) String#slice and strict comparison|819,133,341|99|
|(short string) (false) String#startsWith|94,229,775|99|
|(short string) (false) String#slice and strict comparison|818,923,722|92|
|(long string) (false) String#startsWith|81,953,717|98|
|(long string) (false) String#slice and strict comparison|813,687,427|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":78566910.17740718,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":819777792.2757788,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":70511931.05424722,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819133341.1905167,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":94229775.3396775,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":818923722.4021693,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":81953717.02408113,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":813687426.6883082,"samples":8}]}-->
