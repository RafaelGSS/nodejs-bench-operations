## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,839,575|7419788|
|(short string) (true) String#slice and strict comparison|13,520,249|6760125|
|(long string) (true) String#startsWith|13,918,991|6959496|
|(long string) (true) String#slice and strict comparison|12,820,188|6410095|
|(short string) (false) String#startsWith|14,443,535|7221768|
|(short string) (false) String#slice and strict comparison|12,879,516|6439759|
|(long string) (false) String#startsWith|14,293,181|7146591|
|(long string) (false) String#slice and strict comparison|12,828,579|6414290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14839575.228256207,"samples":7419788},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13520249.51329102,"samples":6760125},{"name":"(long string) (true) String#startsWith","opsSec":13918991.860950803,"samples":6959496},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12820188.666810557,"samples":6410095},{"name":"(short string) (false) String#startsWith","opsSec":14443535.653686063,"samples":7221768},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12879516.402831282,"samples":6439759},{"name":"(long string) (false) String#startsWith","opsSec":14293181.59973171,"samples":7146591},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12828579.974127775,"samples":6414290}]}-->
