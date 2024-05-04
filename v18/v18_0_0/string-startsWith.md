## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,379,490|96|
|(short string) (true) String#slice and strict comparison|906,837,072|93|
|(long string) (true) String#startsWith|78,726,722|96|
|(long string) (true) String#slice and strict comparison|904,321,777|99|
|(short string) (false) String#startsWith|104,785,169|92|
|(short string) (false) String#slice and strict comparison|906,462,964|100|
|(long string) (false) String#startsWith|90,713,786|97|
|(long string) (false) String#slice and strict comparison|904,146,202|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":88379489.97065386,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":906837072.1905942,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":78726721.82011837,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904321777.0035138,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":104785168.89638671,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906462963.9898578,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":90713786.06618711,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":904146202.1952468,"samples":6}]}-->
