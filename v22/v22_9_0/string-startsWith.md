## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|127,405,970|63703478|
|(short string) (true) String#slice and strict comparison|57,564,209|28784158|
|(long string) (true) String#startsWith|64,322,407|32171042|
|(long string) (true) String#slice and strict comparison|52,855,805|26434227|
|(short string) (false) String#startsWith|96,664,717|48332408|
|(short string) (false) String#slice and strict comparison|58,128,032|29064887|
|(long string) (false) String#startsWith|89,382,668|44691380|
|(long string) (false) String#slice and strict comparison|52,435,310|26220279|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:51:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":127405970.64222306,"samples":63703478},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57564209.023942985,"samples":28784158},{"name":"(long string) (true) String#startsWith","opsSec":64322407.38964507,"samples":32171042},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52855805.28865959,"samples":26434227},{"name":"(short string) (false) String#startsWith","opsSec":96664717.01532978,"samples":48332408},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58128032.484146774,"samples":29064887},{"name":"(long string) (false) String#startsWith","opsSec":89382668.82967779,"samples":44691380},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52435310.37900789,"samples":26220279}]}-->
