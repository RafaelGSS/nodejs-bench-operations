## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,112,124|8056063|
|(short string) (true) String#slice and strict comparison|19,348,610|9674306|
|(long string) (true) String#startsWith|15,571,367|7785684|
|(long string) (true) String#slice and strict comparison|20,185,060|10092531|
|(short string) (false) String#startsWith|16,886,732|8443367|
|(short string) (false) String#slice and strict comparison|19,817,982|9908992|
|(long string) (false) String#startsWith|15,979,394|7989698|
|(long string) (false) String#slice and strict comparison|20,084,994|10042498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16112124.074183237,"samples":8056063},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19348610.46507363,"samples":9674306},{"name":"(long string) (true) String#startsWith","opsSec":15571367.566507228,"samples":7785684},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20185060.28156388,"samples":10092531},{"name":"(short string) (false) String#startsWith","opsSec":16886732.432396032,"samples":8443367},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19817982.90889984,"samples":9908992},{"name":"(long string) (false) String#startsWith","opsSec":15979394.555615433,"samples":7989698},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20084994.14590009,"samples":10042498}]}-->
