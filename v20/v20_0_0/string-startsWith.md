## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|281,734,335|93|
|(short string) (true) String#slice and strict comparison|849,220,055|90|
|(long string) (true) String#startsWith|175,936,013|93|
|(long string) (true) String#slice and strict comparison|846,056,014|95|
|(short string) (false) String#startsWith|868,727,800|94|
|(short string) (false) String#slice and strict comparison|832,857,779|93|
|(long string) (false) String#startsWith|871,393,400|94|
|(long string) (false) String#slice and strict comparison|824,159,244|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":281734334.936168,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":849220054.7245272,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":175936013.4898651,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":846056014.1817936,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":868727799.740036,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":832857778.961,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":871393400.077952,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":824159243.9626979,"samples":7}]}-->
