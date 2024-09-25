## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|13,392,190|6696096|
|(short string) (true) String#slice and strict comparison|14,027,467|7013734|
|(long string) (true) String#endsWith|13,580,405|6790203|
|(long string) (true) String#slice and strict comparison|13,789,071|6894536|
|(short string) (false) String#endsWith|14,231,909|7115955|
|(short string) (false) String#slice and strict comparison|14,116,943|7058472|
|(long string) (false) String#endsWith|13,668,176|6834089|
|(long string) (false) String#slice and strict comparison|13,329,182|6664592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:42:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":13392190.392996049,"samples":6696096},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14027467.943729768,"samples":7013734},{"name":"(long string) (true) String#endsWith","opsSec":13580405.538370201,"samples":6790203},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13789071.034983817,"samples":6894536},{"name":"(short string) (false) String#endsWith","opsSec":14231909.146061553,"samples":7115955},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14116943.689536422,"samples":7058472},{"name":"(long string) (false) String#endsWith","opsSec":13668176.851578983,"samples":6834089},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13329182.587272394,"samples":6664592}]}-->
