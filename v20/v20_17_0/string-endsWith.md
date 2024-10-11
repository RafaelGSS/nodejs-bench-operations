## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|59,369,773|29710910|
|(short string) (true) String#slice and strict comparison|60,900,331|30450174|
|(long string) (true) String#endsWith|48,865,923|24433881|
|(long string) (true) String#slice and strict comparison|56,287,612|28146214|
|(short string) (false) String#endsWith|57,220,139|28610389|
|(short string) (false) String#slice and strict comparison|59,781,098|29891555|
|(long string) (false) String#endsWith|52,659,298|26329755|
|(long string) (false) String#slice and strict comparison|55,678,846|27841686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":59369773.25080059,"samples":29710910},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60900331.43510985,"samples":30450174},{"name":"(long string) (true) String#endsWith","opsSec":48865923.56622359,"samples":24433881},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56287612.81987371,"samples":28146214},{"name":"(short string) (false) String#endsWith","opsSec":57220139.76656104,"samples":28610389},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59781098.485598154,"samples":29891555},{"name":"(long string) (false) String#endsWith","opsSec":52659298.204302624,"samples":26329755},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55678846.312014066,"samples":27841686}]}-->
