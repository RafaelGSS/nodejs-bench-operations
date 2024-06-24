## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,665,891|7832946|
|(short string) (true) String#slice and strict comparison|15,671,470|7835736|
|(long string) (true) String#startsWith|14,325,118|7162560|
|(long string) (true) String#slice and strict comparison|16,356,130|8178066|
|(short string) (false) String#startsWith|15,935,425|7967713|
|(short string) (false) String#slice and strict comparison|16,426,172|8213087|
|(long string) (false) String#startsWith|16,030,508|8015255|
|(long string) (false) String#slice and strict comparison|16,487,333|8243667|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:52:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15665891.826203937,"samples":7832946},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15671470.957319293,"samples":7835736},{"name":"(long string) (true) String#startsWith","opsSec":14325118.764168099,"samples":7162560},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16356130.972697673,"samples":8178066},{"name":"(short string) (false) String#startsWith","opsSec":15935425.69017883,"samples":7967713},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16426172.667538501,"samples":8213087},{"name":"(long string) (false) String#startsWith","opsSec":16030508.778521916,"samples":8015255},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16487333.805728208,"samples":8243667}]}-->
