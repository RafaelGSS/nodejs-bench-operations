## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|121,334,034|60667052|
|(short string) (true) String#slice and strict comparison|57,023,251|28511636|
|(long string) (true) String#startsWith|63,417,009|31709292|
|(long string) (true) String#slice and strict comparison|51,989,456|25994731|
|(short string) (false) String#startsWith|95,150,774|47575403|
|(short string) (false) String#slice and strict comparison|57,072,144|28537929|
|(long string) (false) String#startsWith|88,223,364|44111693|
|(long string) (false) String#slice and strict comparison|51,076,645|25538329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:50:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":121334034.83960013,"samples":60667052},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57023251.585675925,"samples":28511636},{"name":"(long string) (true) String#startsWith","opsSec":63417009.98981206,"samples":31709292},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51989456.385138705,"samples":25994731},{"name":"(short string) (false) String#startsWith","opsSec":95150774.60024439,"samples":47575403},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57072144.8862537,"samples":28537929},{"name":"(long string) (false) String#startsWith","opsSec":88223364.29705238,"samples":44111693},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51076645.23083869,"samples":25538329}]}-->
