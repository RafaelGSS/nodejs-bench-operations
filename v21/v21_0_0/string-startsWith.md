## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,854,070|6927036|
|(short string) (true) String#slice and strict comparison|12,086,687|6043344|
|(long string) (true) String#startsWith|13,298,455|6649228|
|(long string) (true) String#slice and strict comparison|11,860,011|5930006|
|(short string) (false) String#startsWith|14,874,298|7437150|
|(short string) (false) String#slice and strict comparison|12,386,877|6193439|
|(long string) (false) String#startsWith|14,052,103|7026052|
|(long string) (false) String#slice and strict comparison|11,808,671|5904336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:09:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13854070.093304167,"samples":6927036},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12086687.997298416,"samples":6043344},{"name":"(long string) (true) String#startsWith","opsSec":13298455.557899619,"samples":6649228},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11860011.543334993,"samples":5930006},{"name":"(short string) (false) String#startsWith","opsSec":14874298.641098663,"samples":7437150},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12386877.750080222,"samples":6193439},{"name":"(long string) (false) String#startsWith","opsSec":14052103.156042907,"samples":7026052},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11808671.415627155,"samples":5904336}]}-->
