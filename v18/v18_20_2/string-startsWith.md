## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,112,195|7556098|
|(short string) (true) String#slice and strict comparison|17,075,396|8537699|
|(long string) (true) String#startsWith|14,435,171|7217586|
|(long string) (true) String#slice and strict comparison|15,901,506|7950754|
|(short string) (false) String#startsWith|16,003,285|8001643|
|(short string) (false) String#slice and strict comparison|16,599,503|8299752|
|(long string) (false) String#startsWith|15,717,258|7858630|
|(long string) (false) String#slice and strict comparison|16,571,501|8285751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15112195.128067201,"samples":7556098},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17075396.59954442,"samples":8537699},{"name":"(long string) (true) String#startsWith","opsSec":14435171.717787724,"samples":7217586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15901506.240876462,"samples":7950754},{"name":"(short string) (false) String#startsWith","opsSec":16003285.229272934,"samples":8001643},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16599503.390524978,"samples":8299752},{"name":"(long string) (false) String#startsWith","opsSec":15717258.426139703,"samples":7858630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16571501.352043575,"samples":8285751}]}-->
