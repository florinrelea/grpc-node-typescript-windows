$ROOT_PROTO_DIR=".\protos"

if ($ROOT_PROTO_DIR -eq $null) {
  write-host "You must provice the root protos dir."
  return
}

# Generate protobuf files for JS and TS
$PROTOC_GEN_TS_PATH = ".\node_modules\.bin\protoc-gen-ts.cmd"
$GRPC_TOOLS_NODE_PROTOC_PLUGIN=".\node_modules\.bin\grpc_tools_node_protoc_plugin.cmd"
$GRPC_TOOLS_NODE_PROTOC=".\node_modules\.bin\grpc_tools_node_protoc"
$OUTPUT_DIR="$ROOT_PROTO_DIR\ts"
$PROTO_DIR=$ROOT_PROTO_DIR

# loop over all the available proto files and compile them into respective dir
# JavaScript code generating
Invoke-Expression "$GRPC_TOOLS_NODE_PROTOC --plugin=protoc-gen-grpc=$GRPC_TOOLS_NODE_PROTOC_PLUGIN --ts_out=$OUTPUT_DIR --js_out=import_style=commonjs,binary:$OUTPUT_DIR --grpc_out=$OUTPUT_DIR -I $PROTO_DIR $PROTO_DIR\*.proto"

write-host "Successfully built protobufs"
