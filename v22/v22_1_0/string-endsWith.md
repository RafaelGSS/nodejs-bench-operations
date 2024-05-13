## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,787,819|7893910|
|(short string) (true) String#slice and strict comparison|16,021,613|8010808|
|(long string) (true) String#endsWith|14,068,126|7034064|
|(long string) (true) String#slice and strict comparison|15,902,627|7951314|
|(short string) (false) String#endsWith|15,785,598|7892800|
|(short string) (false) String#slice and strict comparison|16,078,532|8039267|
|(long string) (false) String#endsWith|15,477,755|7738878|
|(long string) (false) String#slice and strict comparison|16,066,931|8033466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:54:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15787819.242161835,"samples":7893910},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16021613.564738978,"samples":8010808},{"name":"(long string) (true) String#endsWith","opsSec":14068126.424351444,"samples":7034064},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15902627.554754624,"samples":7951314},{"name":"(short string) (false) String#endsWith","opsSec":15785598.326631486,"samples":7892800},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16078532.102753043,"samples":8039267},{"name":"(long string) (false) String#endsWith","opsSec":15477755.75239265,"samples":7738878},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16066931.518093362,"samples":8033466}]}-->
