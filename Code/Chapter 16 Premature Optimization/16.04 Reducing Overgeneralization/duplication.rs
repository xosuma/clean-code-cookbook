fn validate_size(value: i32) {
 	validate_type(value, Type::Integer);
	validate_min_integer(value, 0);
}
	
fn validate_years(value: i32) {
	validate_type(value, Type::Integer);
	validate_min_integer(value, 0);
}
	
// 중복은 우발적인 것이므로 추상화해서는 안 됩니다.
