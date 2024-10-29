## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|109,858,530|54968335|
|(short string) (true) String#slice and strict comparison|62,409,447|31205926|
|(long string) (true) String#startsWith|63,169,444|31584730|
|(long string) (true) String#slice and strict comparison|57,405,116|28714348|
|(short string) (false) String#startsWith|97,915,770|48957893|
|(short string) (false) String#slice and strict comparison|62,424,903|31217445|
|(long string) (false) String#startsWith|77,240,682|38624609|
|(long string) (false) String#slice and strict comparison|56,986,366|28495618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:58:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":109858530.7031497,"samples":54968335},{"name":"(short string) (true) String#slice and strict comparison","opsSec":62409447.23917898,"samples":31205926},{"name":"(long string) (true) String#startsWith","opsSec":63169444.460316665,"samples":31584730},{"name":"(long string) (true) String#slice and strict comparison","opsSec":57405116.159676015,"samples":28714348},{"name":"(short string) (false) String#startsWith","opsSec":97915770.92097127,"samples":48957893},{"name":"(short string) (false) String#slice and strict comparison","opsSec":62424903.76329517,"samples":31217445},{"name":"(long string) (false) String#startsWith","opsSec":77240682.90453905,"samples":38624609},{"name":"(long string) (false) String#slice and strict comparison","opsSec":56986366.05912932,"samples":28495618}]}-->
