package command

import (
	"testing"

	"github.com/mitchellh/cli"
)

func TestSystemReconcileCommand_Implements(t *testing.T) {
	t.Parallel()
	var _ cli.Command = &SystemCommand{}
}
