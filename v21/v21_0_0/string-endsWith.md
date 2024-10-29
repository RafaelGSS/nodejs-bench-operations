## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|111,654,553|55827290|
|(short string) (true) String#slice and strict comparison|58,275,924|29143965|
|(long string) (true) String#endsWith|60,748,114|30380046|
|(long string) (true) String#slice and strict comparison|52,720,372|26361140|
|(short string) (false) String#endsWith|89,525,608|44763533|
|(short string) (false) String#slice and strict comparison|58,124,587|29062328|
|(long string) (false) String#endsWith|84,188,712|42094389|
|(long string) (false) String#slice and strict comparison|52,466,898|26233457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:46:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":111654553.20290722,"samples":55827290},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58275924.69330578,"samples":29143965},{"name":"(long string) (true) String#endsWith","opsSec":60748114.53724915,"samples":30380046},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52720372.3660463,"samples":26361140},{"name":"(short string) (false) String#endsWith","opsSec":89525608.16499664,"samples":44763533},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58124587.761733964,"samples":29062328},{"name":"(long string) (false) String#endsWith","opsSec":84188712.16442709,"samples":42094389},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52466898.05006299,"samples":26233457}]}-->
