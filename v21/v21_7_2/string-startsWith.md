## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|310,010,115|95|
|(short string) (true) String#slice and strict comparison|910,315,828|99|
|(long string) (true) String#startsWith|194,667,218|97|
|(long string) (true) String#slice and strict comparison|909,131,142|95|
|(short string) (false) String#startsWith|870,289,660|100|
|(short string) (false) String#slice and strict comparison|909,499,725|96|
|(long string) (false) String#startsWith|868,899,829|92|
|(long string) (false) String#slice and strict comparison|909,207,992|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:50:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":310010115.1824393,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":910315828.0762696,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":194667217.98672763,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":909131142.1648389,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":870289660.0936128,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":909499725.1804075,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":868899829.364488,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909207992.2194641,"samples":6}]}-->
