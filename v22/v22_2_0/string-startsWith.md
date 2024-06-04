## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,756,879|7878440|
|(short string) (true) String#slice and strict comparison|16,012,794|8006398|
|(long string) (true) String#startsWith|14,228,279|7114140|
|(long string) (true) String#slice and strict comparison|16,117,461|8058731|
|(short string) (false) String#startsWith|15,915,089|7957545|
|(short string) (false) String#slice and strict comparison|16,212,093|8106047|
|(long string) (false) String#startsWith|15,567,757|7783879|
|(long string) (false) String#slice and strict comparison|16,194,300|8097151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15756879.62181831,"samples":7878440},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16012794.686940487,"samples":8006398},{"name":"(long string) (true) String#startsWith","opsSec":14228279.772364372,"samples":7114140},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16117461.065208636,"samples":8058731},{"name":"(short string) (false) String#startsWith","opsSec":15915089.522626357,"samples":7957545},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16212093.902721388,"samples":8106047},{"name":"(long string) (false) String#startsWith","opsSec":15567757.533011857,"samples":7783879},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16194300.47780476,"samples":8097151}]}-->
