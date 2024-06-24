## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,592,358|7796180|
|(short string) (true) String#slice and strict comparison|16,780,318|8390160|
|(long string) (true) String#startsWith|14,391,496|7195749|
|(long string) (true) String#slice and strict comparison|16,430,008|8215005|
|(short string) (false) String#startsWith|16,019,162|8009582|
|(short string) (false) String#slice and strict comparison|16,579,690|8289846|
|(long string) (false) String#startsWith|16,306,086|8153044|
|(long string) (false) String#slice and strict comparison|16,897,107|8448554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:47:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15592358.779263303,"samples":7796180},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16780318.16822386,"samples":8390160},{"name":"(long string) (true) String#startsWith","opsSec":14391496.179748362,"samples":7195749},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16430008.232048795,"samples":8215005},{"name":"(short string) (false) String#startsWith","opsSec":16019162.9871187,"samples":8009582},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16579690.479860492,"samples":8289846},{"name":"(long string) (false) String#startsWith","opsSec":16306086.3004183,"samples":8153044},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16897107.672173943,"samples":8448554}]}-->
