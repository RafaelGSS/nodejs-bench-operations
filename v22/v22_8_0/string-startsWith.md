## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|119,744,275|59872181|
|(short string) (true) String#slice and strict comparison|53,816,588|26914114|
|(long string) (true) String#startsWith|65,229,184|32615093|
|(long string) (true) String#slice and strict comparison|50,726,275|25363142|
|(short string) (false) String#startsWith|88,038,793|44019492|
|(short string) (false) String#slice and strict comparison|54,717,123|27369164|
|(long string) (false) String#startsWith|87,033,198|43517312|
|(long string) (false) String#slice and strict comparison|50,762,513|25383378|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:01:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":119744275.30514468,"samples":59872181},{"name":"(short string) (true) String#slice and strict comparison","opsSec":53816588.225399084,"samples":26914114},{"name":"(long string) (true) String#startsWith","opsSec":65229184.601558,"samples":32615093},{"name":"(long string) (true) String#slice and strict comparison","opsSec":50726275.579438254,"samples":25363142},{"name":"(short string) (false) String#startsWith","opsSec":88038793.4840509,"samples":44019492},{"name":"(short string) (false) String#slice and strict comparison","opsSec":54717123.910707876,"samples":27369164},{"name":"(long string) (false) String#startsWith","opsSec":87033198.22214672,"samples":43517312},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50762513.47217405,"samples":25383378}]}-->
