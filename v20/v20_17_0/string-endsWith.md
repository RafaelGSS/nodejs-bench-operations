## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|59,266,338|29639489|
|(short string) (true) String#slice and strict comparison|59,228,404|29617964|
|(long string) (true) String#endsWith|48,739,065|24370726|
|(long string) (true) String#slice and strict comparison|55,959,525|27979766|
|(short string) (false) String#endsWith|57,441,483|28720851|
|(short string) (false) String#slice and strict comparison|59,971,058|29991728|
|(long string) (false) String#endsWith|53,719,808|26859914|
|(long string) (false) String#slice and strict comparison|55,127,935|27567520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:46:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":59266338.03102277,"samples":29639489},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59228404.09737071,"samples":29617964},{"name":"(long string) (true) String#endsWith","opsSec":48739065.05302809,"samples":24370726},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55959525.28485697,"samples":27979766},{"name":"(short string) (false) String#endsWith","opsSec":57441483.722361855,"samples":28720851},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59971058.542893775,"samples":29991728},{"name":"(long string) (false) String#endsWith","opsSec":53719808.66086888,"samples":26859914},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55127935.77317278,"samples":27567520}]}-->
